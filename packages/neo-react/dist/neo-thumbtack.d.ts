import React from 'react';

export interface NeoThumbtackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoThumbtack(props: NeoThumbtackProps): React.ReactElement;
export default NeoThumbtack;
