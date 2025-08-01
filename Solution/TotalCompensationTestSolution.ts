type TimeType = "regular" | "overtime" | "doubletime";

interface JobMeta {
  job: string;
  rate: number;
  benefitsRate: number;
}

interface TimePunch {
  job: string;
  start: string;
  end: string;
}

interface EmployeePunchData {
  employee: string;
  timePunch: TimePunch[];
}

interface InputData {
  jobMeta: JobMeta[];
  employeeData: EmployeePunchData[];
}

interface ClassifiedPunches {
  job: string;
  hours: number;
  timeType: TimeType;
}

interface OutputEmployeeRecord {
  employee: string;
  regular: string;
  overtime: string;
  doubletime: string;
  wageTotal: string;
  benefitTotal: string;
}

const inputData: InputData = {
  jobMeta: [
    { job: "Hospital - Painter", rate: 31.25, benefitsRate: 1 },
    { job: "Hospital - Laborer", rate: 20.0, benefitsRate: 0.5 },
    { job: "Shop - Laborer", rate: 16.25, benefitsRate: 1.25 },
  ],
  employeeData: [
    {
      employee: "Mike",
      timePunch: [
        {
          job: "Hospital - Laborer",
          start: "2022-02-18 09:00:01",
          end: "2022-02-18 11:28:54",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-18 12:29:33",
          end: "2022-02-18 14:00:59",
        },
        {
          job: "Shop - Laborer",
          start: "2022-02-19 08:16:51",
          end: "2022-02-19 10:00:11",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-19 11:11:06",
          end: "2022-02-19 12:00:14",
        },
        {
          job: "Shop - Laborer",
          start: "2022-02-19 13:22:13",
          end: "2022-02-19 17:16:32",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-20 06:50:12",
          end: "2022-02-20 11:21:11",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-20 13:01:11",
          end: "2022-02-20 17:52:45",
        },
        {
          job: "Hospital - Laborer",
          start: "2022-02-21 07:08:11",
          end: "2022-02-21 12:22:33",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-21 13:15:10",
          end: "2022-02-21 17:58:06",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-22 07:11:59",
          end: "2022-02-22 11:00:01",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-22 12:16:54",
          end: "2022-02-22 17:59:03",
        },
      ],
    },
    {
      employee: "Steve",
      timePunch: [
        {
          job: "Hospital - Painter",
          start: "2022-02-18 06:02:35",
          end: "2022-02-18 11:28:54",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-18 12:31:06",
          end: "2022-02-18 15:00:11",
        },
        {
          job: "Shop - Laborer",
          start: "2022-02-19 07:03:41",
          end: "2022-02-19 10:00:45",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-19 10:24:58",
          end: "2022-02-19 12:00:19",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-19 13:22:13",
          end: "2022-02-19 17:16:32",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-20 05:56:00",
          end: "2022-02-20 11:33:23",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-20 12:18:45",
          end: "2022-02-20 17:48:41",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-21 06:02:28",
          end: "2022-02-21 12:22:19",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-21 13:04:01",
          end: "2022-02-21 17:52:06",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-22 06:00:58",
          end: "2022-02-22 11:02:55",
        },
        {
          job: "Hospital - Painter",
          start: "2022-02-22 12:18:04",
          end: "2022-02-22 17:48:41",
        },
      ],
    },
    {
      employee: "Alex",
      timePunch: [
        {
          job: "Shop - Laborer",
          start: "2022-02-18 06:05:55",
          end: "2022-02-18 11:18:14",
        },
        {
          job: "Shop - Laborer",
          start: "2022-02-18 11:30:09",
          end: "2022-02-18 14:00:01",
        },
        {
          job: "Shop - Laborer",
          start: "2022-02-19 07:18:22",
          end: "2022-02-19 11:07:45",
        },
        {
          job: "Hospital - Laborer",
          start: "2022-02-19 12:04:18",
          end: "2022-02-19 14:00:19",
        },
        {
          job: "Shop - Laborer",
          start: "2022-02-20 06:06:00",
          end: "2022-02-20 10:13:23",
        },
        {
          job: "Shop - Laborer",
          start: "2022-02-20 12:18:45",
          end: "2022-02-20 16:58:21",
        },
        {
          job: "Shop - Laborer",
          start: "2022-02-21 06:08:08",
          end: "2022-02-21 12:20:55",
        },
        {
          job: "Shop - Laborer",
          start: "2022-02-21 12:54:30",
          end: "2022-02-21 16:45:20",
        },
        {
          job: "Hospital - Laborer",
          start: "2022-02-22 06:09:14",
          end: "2022-02-22 11:30:11",
        },
        {
          job: "Hospital - Laborer",
          start: "2022-02-22 12:00:29",
          end: "2022-02-22 17:59:55",
        },
      ],
    },
  ],
};

function getHoursWorked(start: string, end: string): number {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const msDiff = endDate.getTime() - startDate.getTime();
  const hours = msDiff / (1000 * 60 * 60);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    throw new Error(`Invalid date format: start = ${start}, end = ${end}`);
  }
  if (startDate > endDate) {
    throw new Error(`Start time is after end time: start=${start}, end=${end}`);
  }

  return hours;
}

/**
 * Converts employee punch data to a flattened array of {job, hours, start} entries.
 * This makes it easier to process punches chronologically and classify time types.
 * @param employee - EmployeePunchData object
 * @returns flattened punches array
 */
function flattenEmployeePunches(
  employee: EmployeePunchData
): { job: string; hours: number; start: string }[] {
  for (const punch of employee.timePunch) {
    if (!punch.job || !punch.start || !punch.end) {
      throw new Error(
        `Invalid punch data for employee '${
          employee.employee
        }': ${JSON.stringify(punch)}`
      );
    }
  }

  return employee.timePunch.map((punch) => ({
    job: punch.job,
    hours: getHoursWorked(punch.start, punch.end),
    start: punch.start,
  }));
}

function classifyPunches(
  punches: { job: string; hours: number; start: string }[]
): ClassifiedPunches[] {
  const sorted = [...punches].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );

  let hoursWorked = 0;
  const result: ClassifiedPunches[] = [];

  for (const punch of sorted) {
    let remaining = punch.hours;

    while (remaining > 0) {
      let classification: TimeType;
      let limit: number;

      if (hoursWorked < 40) {
        classification = "regular";
        limit = 40;
      } else if (hoursWorked < 48) {
        classification = "overtime";
        limit = 48;
      } else {
        classification = "doubletime";
        limit = Infinity;
      }

      const available = Math.min(remaining, limit - hoursWorked);

      result.push({
        job: punch.job,
        hours: available,
        timeType: classification,
      });

      hoursWorked += available;
      remaining -= available;
    }
  }

  return result;
}

/**
 * Aggregates classified punches to calculate total hours by type,
 * total wages (considering overtime multipliers), and total benefits.
 * Wage multipliers:
 * - regular: 1x
 * - overtime: 1.5x
 * - doubletime: 2x
 *
 * @param classified - array of ClassifiedPunches
 * @param jobMetaMap - Map from job name to JobMeta (rate and benefits)
 * @returns OutputEmployeeRecord with totals formatted as strings to 4 decimals
 */
function determineTotals(
  classified: ClassifiedPunches[],
  jobMetaMap: Map<string, JobMeta>
): OutputEmployeeRecord {
  let regular = 0,
    overtime = 0,
    doubletime = 0,
    wageTotal = 0,
    benefitTotal = 0;

  for (const entry of classified) {
    const meta = jobMetaMap.get(entry.job);
    if (!meta) throw new Error(`Missing job meta for job: ${entry.job}`);

    const multiplier =
      entry.timeType === "regular"
        ? 1
        : entry.timeType === "overtime"
        ? 1.5
        : 2;

    const wage = entry.hours * meta.rate * multiplier;
    const benefit = entry.hours * meta.benefitsRate;

    wageTotal += wage;
    benefitTotal += benefit;

    if (entry.timeType === "regular") regular += entry.hours;
    if (entry.timeType === "overtime") overtime += entry.hours;
    if (entry.timeType === "doubletime") doubletime += entry.hours;
  }

  return {
    employee: "",
    regular: regular.toFixed(4),
    overtime: overtime.toFixed(4),
    doubletime: doubletime.toFixed(4),
    wageTotal: wageTotal.toFixed(4),
    benefitTotal: benefitTotal.toFixed(4),
  };
}

/**
 * Processes the entire payroll data set:
 * - For each employee:
 *   - Flattens punches to normalized structure
 *   - Classifies punches by time type
 *   - Calculates totals
 *   - Stores result keyed by employee name
 * @param data - full payroll input data
 * @returns map of employee names to payroll output records
 */
function processPayroll(data: InputData): Record<string, OutputEmployeeRecord> {
  const jobMetaMap = new Map(data.jobMeta.map((meta) => [meta.job, meta]));
  const output: Record<string, OutputEmployeeRecord> = {};

  for (const emp of data.employeeData) {
    const punches = flattenEmployeePunches(emp);
    const classified = classifyPunches(punches);
    const totals = determineTotals(classified, jobMetaMap);
    totals.employee = emp.employee;
    output[emp.employee] = totals;
  }
  return output;
}

const result = processPayroll(inputData);
console.log(JSON.stringify(result, null, 2));
