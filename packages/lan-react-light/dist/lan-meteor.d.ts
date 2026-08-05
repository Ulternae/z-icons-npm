import React from 'react';

export interface LanMeteorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeteor(props: LanMeteorProps): React.ReactElement;
export default LanMeteor;
