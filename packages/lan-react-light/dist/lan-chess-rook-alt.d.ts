import React from 'react';

export interface LanChessRookAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessRookAlt(props: LanChessRookAltProps): React.ReactElement;
export default LanChessRookAlt;
