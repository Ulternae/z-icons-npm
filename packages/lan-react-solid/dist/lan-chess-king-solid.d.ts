import React from 'react';

export interface LanChessKingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessKingSolid(props: LanChessKingSolidProps): React.ReactElement;
export default LanChessKingSolid;
