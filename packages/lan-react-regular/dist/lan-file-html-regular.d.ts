import React from 'react';

export interface LanFileHtmlRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileHtmlRegular(props: LanFileHtmlRegularProps): React.ReactElement;
export default LanFileHtmlRegular;
