import React from 'react';

export interface BruMicroblogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMicroblog(props: BruMicroblogProps): React.ReactElement;
export default BruMicroblog;
