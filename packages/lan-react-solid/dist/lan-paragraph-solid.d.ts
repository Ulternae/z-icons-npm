import React from 'react';

export interface LanParagraphSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanParagraphSolid(props: LanParagraphSolidProps): React.ReactElement;
export default LanParagraphSolid;
