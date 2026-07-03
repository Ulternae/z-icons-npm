import React from 'react';

export interface BruDiscordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDiscord(props: BruDiscordProps): React.ReactElement;
export default BruDiscord;
