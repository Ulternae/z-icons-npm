import React from 'react';

export interface MinaRedoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRedoSolid(props: MinaRedoSolidProps): React.ReactElement;
export default MinaRedoSolid;
