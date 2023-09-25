import { calculatePartHealth, calculateMachineHealth } from '../calculations';
import {
  MachineType,
  WeldingRobotPart,
  AssemblyLinePart,
  PaintingStationPart,
  QualityControlStationPart,
  partInfo,
  machineNames,
} from '../../native-app/data/types';

describe('calculatePartHealth', () => {
  it('calculates WeldingRobotPart.ErrorRate health correctly', () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const part: partInfo = { name: WeldingRobotPart.ErrorRate, value: 0.5 };
    const expectedHealth = 72.22;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBeCloseTo(expectedHealth, 2);
  });

  it('calculates WeldingRobotPart.ErrorRate health incorrectly', () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const part: partInfo = { name: WeldingRobotPart.ErrorRate, value: -0.5 };
    const expectedHealth = 0;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBeCloseTo(expectedHealth, 2);
  });

  it('calculates PaintingStationPart.FlowRate health correctly', () => {
    const machineName: MachineType = MachineType.PaintingStation;
    const part: partInfo = { name: PaintingStationPart.FlowRate, value: 20 };
    const expectedHealth = 50.00;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBeCloseTo(expectedHealth, 2);
  });

  it('calculates PaintingStationPart.FlowRate health incorrectly', () => {
    const machineName: MachineType = MachineType.PaintingStation;
    const part: partInfo = { name: PaintingStationPart.FlowRate, value: 5 };
    const expectedHealth = 0;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBeCloseTo(expectedHealth, 2);
  });

  it('calculates AssemblyLinePart.Speed health correctly', () => {
    const machineName: MachineType = MachineType.AssemblyLine;
    const part: partInfo = { name: AssemblyLinePart.Speed, value: 10 };
    const expectedHealth = 100;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });

  it('calculates AssemblyLinePart.Speed health incorrectly', () => {
    const machineName: MachineType = MachineType.AssemblyLine;
    const part: partInfo = { name: AssemblyLinePart.Speed, value: 0.5 };
    const expectedHealth = 100;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });

  it('calculates QualityControlStationPart.CameraCalibration health correctly', () => {
    const machineName: MachineType = MachineType.QualityControlStation;
    const part: partInfo = { name: QualityControlStationPart.CameraCalibration, value: 0.5 };
    const expectedHealth = 75;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });

  it('calculates QualityControlStationPart.CameraCalibration health incorrectly', () => {
    const machineName: MachineType = MachineType.QualityControlStation;
    const part: partInfo = { name: QualityControlStationPart.CameraCalibration, value: 5 };
    const expectedHealth = 0;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });
});

describe('calculateMachineHealth', () => {
  it('calculates Welding Robot machine health correctly', () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const parts = [
      { name: WeldingRobotPart.ErrorRate, value: 0.5 },
      { name: WeldingRobotPart.VibrationLevel, value: 4.0 },
      { name: WeldingRobotPart.ElectrodeWear, value: 0.8 },
      { name: WeldingRobotPart.ShieldingPressure, value: 12.0 },
      { name: WeldingRobotPart.WireFeedRate, value: 7.5 },
      { name: WeldingRobotPart.ArcStability, value: 92.0 },
      { name: WeldingRobotPart.SeamWidth, value: 1.5 },
      { name: WeldingRobotPart.CoolingEfficiency, value: 85.0 },
    ];
    const expectedHealth = 76.70;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBeCloseTo(expectedHealth, 2);
  });

  it('calculates Welding Robot machine health incorrectly', () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const parts = [
      { name: WeldingRobotPart.ErrorRate, value: 5 },
    ];
    const expectedHealth = 0;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBeCloseTo(expectedHealth, 2);
  });

  it('calculates Painting Station machine health correctly', () => {
    const machineName: MachineType = MachineType.PaintingStation;
    const parts = [
      { name: PaintingStationPart.FlowRate, value: 20 },
      { name: PaintingStationPart.Pressure, value: 0.2 },
    ];
    const expectedHealth = 25;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBeCloseTo(expectedHealth, 2);
  });

  it('calculates Painting Station machine health incorrectly', () => {
    const machineName: MachineType = MachineType.PaintingStation;
    const parts = [
      { name: PaintingStationPart.FlowRate, value: 0.8 },
    ];
    const expectedHealth = 0;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBeCloseTo(expectedHealth, 2);
  });

  it('calculates Assembly Line machine health correctly', () => {
    const machineName: MachineType = MachineType.AssemblyLine;
    const parts = [
      { name: AssemblyLinePart.Speed, value: 5 },
    ];
    const expectedHealth = 50;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });

  it('calculates Assembly Line machine health incorrectly', () => {
    const machineName: MachineType = MachineType.AssemblyLine;
    const parts = [
      { name: AssemblyLinePart.Speed, value: 0.6 },
    ];
    const expectedHealth = 100;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });

  it('calculates Quality Control Station machine health correctly', () => {
    const machineName: MachineType = MachineType.QualityControlStation;
    const parts = [
      { name: QualityControlStationPart.CameraCalibration, value: 0.5 },
    ];
    const expectedHealth = 75;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });

  it('calculates Quality Control Station machine health incorrectly', () => {
    const machineName: MachineType = MachineType.QualityControlStation;
    const parts = [
      { name: QualityControlStationPart.CameraCalibration, value: 5 },
    ];
    const expectedHealth = 0;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });
});
