import React from 'react';

export interface LanFileHtmlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileHtmlSolid(props: LanFileHtmlSolidProps): React.ReactElement;
export default LanFileHtmlSolid;
