import React from 'react';

export interface LanItalicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanItalicSolid(props: LanItalicSolidProps): React.ReactElement;
export default LanItalicSolid;
