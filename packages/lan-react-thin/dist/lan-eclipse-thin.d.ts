import React from 'react';

export interface LanEclipseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEclipseThin(props: LanEclipseThinProps): React.ReactElement;
export default LanEclipseThin;
