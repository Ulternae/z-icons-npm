import React from 'react';

export interface LanTricycleAdultProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTricycleAdult(props: LanTricycleAdultProps): React.ReactElement;
export default LanTricycleAdult;
