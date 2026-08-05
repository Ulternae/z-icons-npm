import React from 'react';

export interface NeoCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCode(props: NeoCodeProps): React.ReactElement;
export default NeoCode;
