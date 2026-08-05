import React from 'react';

export interface MinaTagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTag(props: MinaTagProps): React.ReactElement;
export default MinaTag;
