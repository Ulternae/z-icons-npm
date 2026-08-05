import React from 'react';

export interface LanChairOfficeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChairOfficeThin(props: LanChairOfficeThinProps): React.ReactElement;
export default LanChairOfficeThin;
