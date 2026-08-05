import React from 'react';

export interface LanGearComplexApiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearComplexApi(props: LanGearComplexApiProps): React.ReactElement;
export default LanGearComplexApi;
