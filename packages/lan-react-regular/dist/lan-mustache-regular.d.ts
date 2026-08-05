import React from 'react';

export interface LanMustacheRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMustacheRegular(props: LanMustacheRegularProps): React.ReactElement;
export default LanMustacheRegular;
