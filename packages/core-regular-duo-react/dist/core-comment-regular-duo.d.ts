import React from 'react';

export interface CoreCommentRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCommentRegularDuo(props: CoreCommentRegularDuoProps): React.ReactElement;
export default CoreCommentRegularDuo;
