import React from 'react';

export interface LanEarthOceaniaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarthOceaniaThin(props: LanEarthOceaniaThinProps): React.ReactElement;
export default LanEarthOceaniaThin;
