import React from 'react';

export interface BruEvernoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruEvernote(props: BruEvernoteProps): React.ReactElement;
export default BruEvernote;
