import React from 'react';

export interface MinaMessageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMessage(props: MinaMessageProps): React.ReactElement;
export default MinaMessage;
