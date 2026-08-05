import React from 'react';

export interface NeoCompressRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCompressRegularDuo(props: NeoCompressRegularDuoProps): React.ReactElement;
export default NeoCompressRegularDuo;
