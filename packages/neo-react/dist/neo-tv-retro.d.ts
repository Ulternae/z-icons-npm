import React from 'react';

export interface NeoTvRetroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTvRetro(props: NeoTvRetroProps): React.ReactElement;
export default NeoTvRetro;
