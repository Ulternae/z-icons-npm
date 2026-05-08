import React from 'react';

export interface MinaExcludeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaExclude: React.FC<MinaExcludeProps>;
export default MinaExclude;
