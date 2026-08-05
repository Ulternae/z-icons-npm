import React from 'react';

export interface NeoCircleInfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleInfo(props: NeoCircleInfoProps): React.ReactElement;
export default NeoCircleInfo;
