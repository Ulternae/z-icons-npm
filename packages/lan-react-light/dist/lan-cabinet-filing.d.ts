import React from 'react';

export interface LanCabinetFilingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCabinetFiling(props: LanCabinetFilingProps): React.ReactElement;
export default LanCabinetFiling;
