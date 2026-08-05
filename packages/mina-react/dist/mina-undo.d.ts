import React from 'react';

export interface MinaUndoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUndo(props: MinaUndoProps): React.ReactElement;
export default MinaUndo;
