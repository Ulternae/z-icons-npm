import React from 'react';

export interface NeoCommentRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCommentRegularDuo(props: NeoCommentRegularDuoProps): React.ReactElement;
export default NeoCommentRegularDuo;
