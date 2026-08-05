import React from 'react';

export interface LanChessRookThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChessRookThin(props: LanChessRookThinProps): React.ReactElement;
export default LanChessRookThin;
