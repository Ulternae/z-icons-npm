import React from 'react';

export interface MinaTypeTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTypeText(props: MinaTypeTextProps): React.ReactElement;
export default MinaTypeText;
