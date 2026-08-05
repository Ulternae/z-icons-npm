import React from 'react';

export interface NeoShirtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShirt(props: NeoShirtProps): React.ReactElement;
export default NeoShirt;
