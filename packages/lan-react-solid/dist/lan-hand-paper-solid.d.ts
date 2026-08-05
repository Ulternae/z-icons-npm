import React from 'react';

export interface LanHandPaperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPaperSolid(props: LanHandPaperSolidProps): React.ReactElement;
export default LanHandPaperSolid;
