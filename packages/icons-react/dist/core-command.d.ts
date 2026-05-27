import React from 'react';

export interface CoreCommandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCommand: React.FC<CoreCommandProps>;
export default CoreCommand;
