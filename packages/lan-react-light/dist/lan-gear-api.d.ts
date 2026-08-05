import React from 'react';

export interface LanGearApiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearApi(props: LanGearApiProps): React.ReactElement;
export default LanGearApi;
