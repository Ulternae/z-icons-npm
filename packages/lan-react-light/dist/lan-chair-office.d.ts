import React from 'react';

export interface LanChairOfficeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChairOffice(props: LanChairOfficeProps): React.ReactElement;
export default LanChairOffice;
