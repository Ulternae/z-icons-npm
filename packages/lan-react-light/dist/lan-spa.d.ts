import React from 'react';

export interface LanSpaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpa(props: LanSpaProps): React.ReactElement;
export default LanSpa;
