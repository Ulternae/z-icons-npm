import React from 'react';

export interface NeoCloneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoClone(props: NeoCloneProps): React.ReactElement;
export default NeoClone;
