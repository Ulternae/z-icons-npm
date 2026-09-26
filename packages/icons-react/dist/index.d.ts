import type * as React from "react";
export type IconProps = Omit<React.SVGProps<SVGSVGElement>, "size"> & { size?: number | string };
export type IconComponent = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export type IconRegistry = Record<string, Record<string, Record<string, IconComponent>>>;
type Defaults = typeof import("./defaults.js").defaultVariants;
type Selection<R extends IconRegistry> = { [P in keyof R & keyof Defaults]: { [V in keyof R[P] & string]: { pack: P; name: keyof R[P][V] & string } & (V extends Defaults[P] ? { variant?: V } : { variant: V }) }[keyof R[P] & string] }[keyof R & keyof Defaults];
export declare function createZIcon<const R extends IconRegistry>(registry: R): React.ComponentType<Selection<R> & IconProps> & { has(pack: string, name: string, variant?: string): boolean };
