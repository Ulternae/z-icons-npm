import React from 'react';

export interface BruStaylinkedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruStaylinked(props: BruStaylinkedProps): React.ReactElement;
export default BruStaylinked;
