import React from 'react';

export interface LanCheeseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheeseThin(props: LanCheeseThinProps): React.ReactElement;
export default LanCheeseThin;
