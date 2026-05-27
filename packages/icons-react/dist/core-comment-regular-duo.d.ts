import React from 'react';

export interface CoreCommentRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCommentRegularDuo: React.FC<CoreCommentRegularDuoProps>;
export default CoreCommentRegularDuo;
