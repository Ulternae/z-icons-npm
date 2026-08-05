import React from 'react';

export interface LanCampfireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCampfire(props: LanCampfireProps): React.ReactElement;
export default LanCampfire;
