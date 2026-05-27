import React from 'react';

export interface NeoCommentDotsRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCommentDotsRegularDuo: React.FC<NeoCommentDotsRegularDuoProps>;
export default NeoCommentDotsRegularDuo;
