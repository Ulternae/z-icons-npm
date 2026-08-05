import React from 'react';

export interface NeoTrashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTrash(props: NeoTrashProps): React.ReactElement;
export default NeoTrash;
