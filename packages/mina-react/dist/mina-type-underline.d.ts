import React from 'react';

export interface MinaTypeUnderlineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTypeUnderline(props: MinaTypeUnderlineProps): React.ReactElement;
export default MinaTypeUnderline;
