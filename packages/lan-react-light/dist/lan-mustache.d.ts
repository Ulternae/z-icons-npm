import React from 'react';

export interface LanMustacheProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMustache(props: LanMustacheProps): React.ReactElement;
export default LanMustache;
