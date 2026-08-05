import React from 'react';

export interface MinaTextJustifyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTextJustify(props: MinaTextJustifyProps): React.ReactElement;
export default MinaTextJustify;
