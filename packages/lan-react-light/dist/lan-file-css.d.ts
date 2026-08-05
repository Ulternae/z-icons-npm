import React from 'react';

export interface LanFileCssProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCss(props: LanFileCssProps): React.ReactElement;
export default LanFileCss;
