import React from 'react';

export interface NeoCommentRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCommentRegularDuo: React.FC<NeoCommentRegularDuoProps>;
export default NeoCommentRegularDuo;
