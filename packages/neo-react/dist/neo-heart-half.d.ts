import React from 'react';

export interface NeoHeartHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHeartHalf(props: NeoHeartHalfProps): React.ReactElement;
export default NeoHeartHalf;
