import React from 'react';

export interface CoreCommandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCommand(props: CoreCommandProps): React.ReactElement;
export default CoreCommand;
