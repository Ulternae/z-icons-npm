import React from 'react';

export interface MinaUndoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUndoSolid(props: MinaUndoSolidProps): React.ReactElement;
export default MinaUndoSolid;
