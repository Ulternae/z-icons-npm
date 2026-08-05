import React from 'react';

export interface MinaExcludeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaExclude(props: MinaExcludeProps): React.ReactElement;
export default MinaExclude;
